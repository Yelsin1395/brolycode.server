export const payload = ({ status, data }) => {
  return { status, data };
};

export const errorLog = (errorData, status) => {
  const errorResponse = {
    status: status || 400,
    code: errorData.code,
    message: errorData.message,
    moreInfoError: JSON.stringify(errorData),
  };

  if (errorResponse.code || errorResponse.message) {
    return errorResponse;
  } else {
    return errorData;
  }
};
