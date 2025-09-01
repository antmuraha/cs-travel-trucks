const SECRET_SLUG = process.env.SECRET_SLUG;

export const proxy = async (req, res) => {
  res.set(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV === 'production' ? 'https://cs-travel-trucks-black.vercel.app' : '*'
  );
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Accept-Version', 'v1');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  try {
    const url = req.url;
    const method = req.method;

    const urlApi = `https://${SECRET_SLUG}.mockapi.io${url}`;

    console.log(`Fetching from: ${urlApi}`);

    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(urlApi, { method, headers });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching from IMDB');
  }
};
