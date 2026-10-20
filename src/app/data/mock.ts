export type Kind = 'jogo' | 'serie' | 'anime' | 'filme';
export interface Item { id: number; titulo: string; kind: Kind; genero: string; nota: number; ano: number; icon: string }
export const items: Item[] = [
    { id: 1, titulo: 'Cyber Odyssey', kind: 'jogo', genero: 'RPG • Ação', nota: 9.2, ano: 2026, icon: 'bi-controller' },
    { id: 2, titulo: 'Elden Realm', kind: 'jogo', genero: 'RPG • Fantasia', nota: 9.4, ano: 2025, icon: 'bi-controller' },
    { id: 3, titulo: 'Neon Drift', kind: 'jogo', genero: 'Corrida', nota: 8.8, ano: 2026, icon: 'bi-controller' },
    { id: 4, titulo: 'The Last Signal', kind: 'serie', genero: 'Drama • Sci-Fi', nota: 9.1, ano: 2026, icon: 'bi-tv' },
    { id: 5, titulo: 'Dark District', kind: 'serie', genero: 'Suspense', nota: 8.7, ano: 2025, icon: 'bi-tv' },
    { id: 6, titulo: 'Neo Samurai', kind: 'anime', genero: 'Ação • Sci-Fi', nota: 8.9, ano: 2026, icon: 'bi-stars' },
    { id: 7, titulo: 'Demon Pulse', kind: 'anime', genero: 'Aventura', nota: 8.7, ano: 2025, icon: 'bi-stars' },
    { id: 8, titulo: 'Titan Legacy', kind: 'anime', genero: 'Ação', nota: 9.0, ano: 2024, icon: 'bi-stars' },
    { id: 9, titulo: 'Duna Vermelha', kind: 'filme', genero: 'Sci-Fi', nota: 9.1, ano: 2026, icon: 'bi-film' },
    { id: 10, titulo: 'Oppen Sky', kind: 'filme', genero: 'Drama', nota: 8.9, ano: 2025, icon: 'bi-film' },
    { id: 11, titulo: 'Infinity Warzone', kind: 'filme', genero: 'Ação', nota: 8.5, ano: 2024, icon: 'bi-film' },
    { id: 12, titulo: 'Interstellar X', kind: 'filme', genero: 'Sci-Fi', nota: 9.0, ano: 2026, icon: 'bi-film' }];
