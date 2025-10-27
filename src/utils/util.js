class Util {
  async loadImagesFromCSV(csvUrl) {
    try {
      const res = await fetch(csvUrl);
      const csvText = await res.text();
      const lines = csvText.trim().split("\n").slice(1);
      return lines.map((line) => line.replace(/["\r]/g, "").trim());
    } catch (err) {
      console.log("Erro ao carregar imagens: ", err);
      return[]
    }
  }

  async loadImagesAndNames(csvUrl) {
    try {
      const res = await fetch(csvUrl);
      const csvText = await res.text();

      const lines = csvText.trim().split("\n").slice(1); // remove cabeçalho
      return lines.map((line) => {
        const [image, name] = line.split(","); // separa por vírgula
        return {
          image: image.replace(/["\r]/g, "").trim(),
          name: name.replace(/["\r]/g, "").trim(),
        };
      });
    } catch (err) {
      console.error("Erro ao carregar CSV:", err);
      return [];
    }
  }
}

export const util = new Util();
