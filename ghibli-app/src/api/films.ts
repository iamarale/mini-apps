export async function getGhibliData(endpoint: string) {
  try {
    const res = await fetch(`https://ghibliapi.vercel.app/${endpoint}`);

    // err
    if (!res.ok) throw new Error(`Error: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`err messsage: ${error} `);
  }
}
