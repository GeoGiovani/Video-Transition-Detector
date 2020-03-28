export const addVideo = fileName => {
  return {
    type: "ADD_VIDEO",
    newItem: fileName
  };
};

export const setURL = URL => {
  return {
    type: "SET_URL",
    payload: URL
  };
};

export const setFileName = fileName => {
  return {
    type: "SET_FILENAME",
    payload: fileName
  };
};

export const toggleMSG = () => {
  return {
    type: "TOGGLE_MSG"
  };
};

export const setSTI = typeSTI => {
  return {
    type: "SET_STI",
    payload: typeSTI
  };
};