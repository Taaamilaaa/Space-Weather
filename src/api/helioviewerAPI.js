import axios from "axios";

export async function getSunImage(date) {
  try {
    const respId = await axios.get(
      `https://api.helioviewer.org/v2/getClosestImage/?date=${date}&sourceId=14`
    );
    const id = respId.data.id;

    const respImg = `https://api.helioviewer.org/v2/downloadImage/?id=${id}&imageScale=512`;
    return respImg;
  } catch (error) {
    console.error("Ошибка загрузки фото солнца:", error);
    return null;
  }
}
