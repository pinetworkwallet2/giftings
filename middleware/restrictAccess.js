const axios = require('axios');

const restrictAccess = async (req, res, next) => {
  try {
    const ipAddress = req.ip || req.connection.remoteAddress;

    // Fetch country information based on the IP address using ipinfo.io
    const response = await axios.get(`https://ipinfo.io/${ipAddress}/json`);
    const country  = response.data;
    console.log(country, 'the country')

    // Check if the country is Nigeria
    if (country !== 'NG') {
      // Allow access for users from other countries
      next();
    } else {
      // Deny access for users from Nigeria
      res.status(403).json({ error: 'Access denied for users from Nigeria' });
    }
  } catch (error) {
    // Handle errors, log them, or deny access (depending on your requirements)
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = restrictAccess;