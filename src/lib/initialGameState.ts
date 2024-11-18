export const initialGameState = {
  introComplete: JSON.parse(import.meta.env.VITE_INTRO_COMPLETE || 'false'),
  singularityComplete: JSON.parse(import.meta.env.VITE_SINGULARITY_COMPLETE || 'false'),
  bigBangComplete: JSON.parse(import.meta.env.VITE_BIG_BANG_COMPLETE || 'false'),
  fateComplete: JSON.parse(import.meta.env.VITE_FATE_COMPLETE || 'false'),
  cellCount: parseInt(import.meta.env.VITE_CELL_COUNT || '0'),
  hasOpened: JSON.parse(import.meta.env.VITE_HAS_OPENED || 'false'),
  cellFactories: JSON.parse(import.meta.env.VITE_CELL_FACTORIES || '[]'),
}
