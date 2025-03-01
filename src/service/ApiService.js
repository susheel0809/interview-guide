import axios from 'axios';

const API_URL = 'https://script.google.com/macros/s/AKfycbzQTLMSNXrTdbppLR8vhAuMBdmhdGVdaCSIXx2qKgVgBM1dWmBCsoGI4aVex3AbpX2R/exec';

// Create a reusable API service for getting questions based on subject
const getQuestionsBySubject = async (subject) => {
    try {
      // Use await to pause until the axios request is resolved
      const response = await axios.get(
        `https://script.google.com/macros/s/AKfycbzQTLMSNXrTdbppLR8vhAuMBdmhdGVdaCSIXx2qKgVgBM1dWmBCsoGI4aVex3AbpX2R/exec?subject=${subject}`
      );
      
      // Return the response data
      return response.data;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error; // Re-throw error for further handling if needed
    }
  };
  

export default {
  getQuestionsBySubject
};

