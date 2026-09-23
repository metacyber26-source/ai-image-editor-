// Berjalan di balik layar (Backend/Helper Logic dalam Bahasa Inggris)
export const ART_STYLES = [
  { id: 'cyberpunk', name: 'Cyberpunk', promptModifier: 'cyberpunk style, neon lights, futuristic city background, highly detailed digital art, 8k resolution' },
  { id: 'watercolor', name: 'Cat Air (Watercolor)', promptModifier: 'soft watercolor painting style, artistic brush strokes, pastel color palette, paper texture' },
  { id: 'oil_painting', name: 'Lukisan Minyak (Oil Painting)', promptModifier: 'classical oil painting style, rich textured brushwork, dramatic lighting, masterpiece' },
  { id: 'anime', name: 'Anime / Manga', promptModifier: 'modern anime style, vibrant colors, clean line art, studio ghibli aesthetic' },
  { id: 'photorealistic', name: 'Fotorealistik (Photorealistic)', promptModifier: 'hyper-realistic photography, cinematic lighting, ultra-detailed textures, 8k, DSLR capture' },
];

export function generateAutomatedPrompt(baseDescription, styleId) {
  const selectedStyle = ART_STYLES.find(s => s.id === styleId) || ART_STYLES[4];
  return `A high-end professional digital creation of "${baseDescription}", rendered in ${selectedStyle.promptModifier}, flawless composition, masterpiece quality.`;
}
