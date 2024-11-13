import axios from "axios";

const BASE_URL = "https://fundoonotes.incubation.bridgelabz.com/api";

export const loginApiCall = async (email, password) => {
  const res = await axios.post(
    "https://fundoonotes.incubation.bridgelabz.com/api/user/login",
    { email: email, password: password }
  );
  console.log(res);
  localStorage.setItem("accessToken", res?.data?.id);
};

export const SignUpApiCall = async (payload, END_POINT) => {
  console.log(payload);
  console.log(END_POINT);
  return await axios.post(`${BASE_URL}${END_POINT}`, payload);
};

export const getAllNotesApiCall = () => {
  const accessToken = localStorage.getItem("accessToken");
  return axios.get(`${BASE_URL}/notes/getNotesList`, {
    headers: {
      Authorization: `${accessToken}`,
    },
  });
};

export const addNoteApi = (payload) => {
  return axios.post(
    `https://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${localStorage.getItem("accessToken")}`,
      },
    }
  );
};
