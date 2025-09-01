"use client";

import { useState } from "react";

interface FilterPanelProps {
  onApplyFilter: (prompt: string) => void;
  isLoading: boolean;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  onApplyFilter,
  isLoading,
}) => {
  const [selectedPresetPrompt, setSelectedPresetPrompt] = useState<
    string | null
  >(null);
  const [customPrompt, setCustomPrompt] = useState("");

  const presets = [
    {
      name: "Kodak Gold 200",
      prompt:
        "Emulate the look of Kodak Gold 200 film with its characteristic warm, golden tones, fine grain, and soft contrast for a nostalgic, sun-kissed feel.",
    },
    {
      name: "Kodak Portra 400",
      prompt:
        "Replicate the aesthetic of Kodak Portra 400 film, known for its beautiful, natural skin tones, muted colors, very fine grain, and low contrast. Ideal for portraits.",
    },
    {
      name: "Kodak Ektar 100",
      prompt:
        "Apply the look of Kodak Ektar 100 film, featuring ultra-vivid, highly saturated colors, high contrast, and extremely fine grain. Perfect for vibrant landscapes.",
    },
    {
      name: "Fujifilm Superia 400",
      prompt:
        "Simulate the look of Fujifilm Superia 400 film, emphasizing its cool color palette with rich greens and blues, noticeable grain, and punchy contrast.",
    },
    {
      name: "Fujifilm Pro 400H",
      prompt:
        "Create the aesthetic of Fujifilm Pro 400H film, with its signature soft, airy pastel palette, beautiful cyan and mint green tones, and delicate skin tone reproduction.",
    },
    {
      name: "CineStill 800T",
      prompt:
        "Give the image a cinematic look inspired by CineStill 800T film. Emphasize cool, blue tones in shadows and create a distinct red halation glow around bright light sources, perfect for nighttime cityscapes.",
    },
    {
      name: "Ilford HP5 Plus 400",
      prompt:
        "Convert the image to a classic black and white look emulating Ilford HP5 Plus 400 film, with its iconic punchy contrast, rich blacks, and prominent, beautiful grain structure.",
    },
    {
      name: "Kodak Tri-X 400",
      prompt:
        "Apply a gritty, high-contrast black and white effect inspired by Kodak Tri-X 400 film, known for its sharp, distinctive grain and deep blacks, classic for photojournalism.",
    },
    {
      name: "Vintage Agfa",
      prompt:
        "Apply a vintage Agfa film style, characterized by its unique muted greens, warm reds, and a slightly faded, nostalgic quality with soft contrast.",
    },
    {
      name: "Instant Polaroid",
      prompt:
        "Transform the image to look like a vintage instant Polaroid photo, with soft focus, low contrast, milky blacks, and a classic faded color cast.",
    },
  ];

  const activePrompt = selectedPresetPrompt || customPrompt;

  const handlePresetClick = (prompt: string) => {
    setSelectedPresetPrompt(prompt);
    setCustomPrompt("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomPrompt(e.target.value);
    setSelectedPresetPrompt(null);
  };

  const handleApply = () => {
    if (activePrompt) {
      onApplyFilter(activePrompt);
    }
  };

  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex flex-col gap-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-center text-gray-300">
        Apply a Filter
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => handlePresetClick(preset.prompt)}
            disabled={isLoading}
            className={`w-full text-center bg-white/10 border border-transparent text-gray-200 font-semibold py-3 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/20 active:scale-95 text-base disabled:opacity-50 disabled:cursor-not-allowed ${selectedPresetPrompt === preset.prompt ? "ring-2 ring-offset-2 ring-offset-gray-800 ring-blue-500" : ""}`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={customPrompt}
        onChange={handleCustomChange}
        placeholder="Or describe a custom filter (e.g., '80s synthwave glow')"
        className="flex-grow bg-gray-800 border border-gray-600 text-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full disabled:cursor-not-allowed disabled:opacity-60 text-base"
        disabled={isLoading}
      />

      {activePrompt && (
        <div className="animate-fade-in flex flex-col gap-4 pt-2">
          <button
            onClick={handleApply}
            className="w-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-blue-800 disabled:to-blue-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
            disabled={isLoading || !activePrompt.trim()}
          >
            Apply Filter
          </button>
        </div>
      )}
    </div>
  );
};
