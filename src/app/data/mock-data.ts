import { Jogo } from "../interfaces/game-interface";

export const items: Jogo[] = [
    {"id": 1, "nome": "Final Fantasy VII","genero": "RPG"},
    {"id": 2, "nome": "Elden Realm", "genero": "RPG • Fantasia" },
    {"id": 3, "nome": "Neon Drift", "genero": "Corrida"},
]

export const menu_itens: any[] = [
    {"texto": "Home", "rota": "/" },
    {"texto": "Jogos", "rota": "/jogos"},
    {"texto": "Filmes", "rota": "/filmes"},
    {"texto": "Animes", "rota": "/animes"},
    {"texto": "Eventos", "rota": "/eventos"},
]