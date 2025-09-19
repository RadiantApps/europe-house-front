"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { imageUrl } from "@/config";
import { updateCampaings } from "@/store/features/campaingsSlice";

const EditCampaingsModal = ({ openModal, editData, onSave }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    if (editData?.translations) {
      const prepared = {};
      Object.keys(editData.translations).forEach((lang) => {
        const t = editData.translations[lang];
        let photoObj = null;
        try {
          photoObj = t.photo && t.photo !== "null" ? JSON.parse(t.photo) : null;
        } catch {
          photoObj = null;
        }
        prepared[lang] = {
          ...t,
          photo: null, // file will be stored here if uploaded
          preview: photoObj ? `${imageUrl}/${photoObj.path}` : null,
        };
      });
      setTranslations(prepared);
    }
  }, [editData]);

  const handleChange = (lang, field, value) => {
    setTranslations((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value,
      },
    }));
  };

  const handleFileChange = (lang, file) => {
    setTranslations((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        photo: file,
        preview: URL.createObjectURL(file),
      },
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // simple validation
    for (const lang of Object.keys(translations)) {
      if (!translations[lang].title) {
        setError(`Title is required for ${lang}`);
        return;
      }
      if (!translations[lang].content) {
        setError(`Content is required for ${lang}`);
        return;
      }
    }

    const form = new FormData();

    // flatten to array
    const translationsArray = Object.keys(translations).map((lang) => ({
      ...translations[lang],
      lang,
    }));

    translationsArray.forEach((t, index) => {
      form.append(
        `translations[${index}][campaings_translation_id]`,
        t.campaings_translation_id
      );
      form.append(`translations[${index}][title]`, t.title);
      form.append(`translations[${index}][content]`, t.content);
      form.append(`translations[${index}][language_code]`, t.language_code);

      if (t.photo) {
        // attach file per language
        form.append(`photo_${t.lang}`, t.photo);
      }
    });

    dispatch(updateCampaings(form))
      .unwrap()
      .then(() => {
        toast.success("Campaings updated successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Campaings update failed");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>

      {/* Modal */}
      <div
        className="relative bg-[#EFEFEF] pl-[40px] pr-[40px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "650px", height: "80%", overflowY: "auto" }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-gray-700">
              Edit Campaings
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle className="text-2xl text-gray-600" />
            </button>
          </div>

          <form
            autoComplete="off"
            onSubmit={onSubmit}
            className="space-y-5 mt-[20px]"
          >
            {Object.keys(translations).map((lang) => (
              <div key={lang} className="">
                <h4 className="font-semibold text-lg uppercase mb-5">
                  Language ({lang})
                </h4>

                {/* Title */}
                <div>
                  <label className="block mb-2 text-[18px] font-medium">
                    Title
                  </label>
                  <input
                    type="text"
                    value={translations[lang].title || ""}
                    onChange={(e) =>
                      handleChange(lang, "title", e.target.value)
                    }
                    className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block mb-2 text-[18px] font-medium mt-5">
                    Content
                  </label>
                  <textarea
                    value={translations[lang].content || ""}
                    onChange={(e) =>
                      handleChange(lang, "content", e.target.value)
                    }
                    className="bg-white w-full rounded-[10px] pl-[12px] pt-[8px] pb-[8px] h-[120px] resize-y border border-gray-300"
                  />
                </div>

                {/* Photo */}
                <div>
                  <label className="block mb-2 text-[18px] font-medium">
                    Photo
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(lang, e.target.files[0])}
                    className="bg-white h-[45px] w-full rounded-[10px] pl-[12px] pt-[8px]"
                  />
                  {translations[lang].preview && (
                    <a
                      href={translations[lang].preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-500 underline"
                    >
                      See photo
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Submit */}
            <div className="flex items-center justify-center mt-5">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium text-black mb-[30px]"
              >
                Save Changes
              </button>
            </div>
          </form>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditCampaingsModal;
