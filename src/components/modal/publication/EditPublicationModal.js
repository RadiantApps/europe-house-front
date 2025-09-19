"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { imageUrl } from "@/config";
import { updatePublication } from "@/store/features/publicationSlice";

const EditPublicationModal = ({ openModal, editData }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [translations, setTranslations] = useState({});
  console.log(editData);
  useEffect(() => {
    if (editData?.translations) {
      const prepared = {};
      Object.keys(editData.translations).forEach((lang) => {
        const t = editData.translations[lang];
        prepared[lang] = {
          ...t,
          photo: null,
          preview: null,
          existingPhoto: t.photo ? `${imageUrl}/${t.photo}` : null,
          filepathFile: null,
          filepathPreview: null,
          existingFilepath: t.filepath ? `${imageUrl}/${t.filepath}` : null,
        };
      });
      setTranslations(prepared);
    }
  }, [editData]);

  const handleChange = (lang, field, value) => {
    setTranslations((prev) => ({
      ...prev,
      [lang]: { ...prev[lang], [field]: value },
    }));
  };

  const handleFileChange = (lang, type, file) => {
    setTranslations((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [type]: file,
        [`${type}Preview`]: URL.createObjectURL(file),
      },
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    for (const lang of Object.keys(translations)) {
      if (!translations[lang].title) {
        setError(`Title is required for ${lang}`);
        return;
      }
    }

    const form = new FormData();
    const translationsArray = Object.keys(translations).map((lang) => ({
      ...translations[lang],
      lang,
    }));

    translationsArray.forEach((t, index) => {
      form.append(`translations[${index}][publication_id]`, t.publication_id);
      form.append(`translations[${index}][title]`, t.title);
      form.append(`translations[${index}][lang]`, t.lang);

      if (t.photo) {
        form.append(`photo_${t.lang}`, t.photo);
      }
      if (t.filepathFile) {
        form.append(`pdf_${t.lang}`, t.filepathFile);
      }
    });

    dispatch(updatePublication(form))
      .unwrap()
      .then(() => {
        toast.success("Update Publication successfull");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
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
              Edit Publication
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
              <div key={lang}>
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

                {/* Photo */}
                <div>
                  <label className="block mb-2 text-[18px] font-medium mt-5">
                    Photo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileChange(lang, "photo", e.target.files[0])
                    }
                    className="bg-white h-[45px] w-full rounded-[10px] pl-[12px] pt-[8px]"
                  />
                  {translations[lang].existingPhoto &&
                    !translations[lang].preview && (
                      <a
                        href={translations[lang].existingPhoto}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-blue-500 underline"
                      >
                        See current photo
                      </a>
                    )}

                  {translations[lang].preview && (
                    <a
                      href={translations[lang].preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-500 underline"
                    >
                      See new photo
                    </a>
                  )}
                </div>

                {/* Filepath (PDF) */}
                <div>
                  <label className="block mb-2 text-[18px] font-medium mt-5">
                    PDF File
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) =>
                      handleFileChange(lang, "filepathFile", e.target.files[0])
                    }
                    className="bg-white h-[45px] w-full rounded-[10px] pl-[12px] pt-[8px]"
                  />
                  {translations[lang].existingFilepath &&
                    !translations[lang].filepathPreview && (
                      <a
                        href={translations[lang].existingFilepath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-blue-500 underline"
                      >
                        See current PDF
                      </a>
                    )}
                  {translations[lang].filepathPreview && (
                    <a
                      href={translations[lang].filepathPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-500 underline"
                    >
                      See new PDF
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

export default EditPublicationModal;
