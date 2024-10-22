const getApiResponse = require('../data/responseData');

const getApiData = (req, res) => {
  try {
    const apiData = getApiResponse(); 
    res.status(200).json(apiData); 
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getApiData,
};