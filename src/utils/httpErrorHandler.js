function httpErrorHandler(error) {
  if (error.response) {
    return {
      type: "REQUEST_FAILED",
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data,
      originalMessage: error.message
    };
  } else if (error.request) {
    // Запит був відправлений, але відповіді немає
    return {
      type: "NETWORK_ERROR",
      message: "No response received",
      originalMessage: error.message
    };
  } else {
    return {
      type: "UNKNOWN_ERROR",
      message: "Request setup error",
      originalMessage: error.message
    };
  }
};

module.exports = httpErrorHandler;