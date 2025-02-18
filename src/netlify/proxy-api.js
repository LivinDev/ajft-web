const axios = require('axios');

exports.handler = async function(event) {
  try {
    const response = await axios({
      method: event.httpMethod,
      url: `http://api.ajftrust.org${event.path}`,
      data: JSON.parse(event.body || '{}'),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to proxy request' })
    };
  }
};