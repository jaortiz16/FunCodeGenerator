export async function fetchContent(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url} with status ${res.status}`);
    }
    return await res.json();
  }