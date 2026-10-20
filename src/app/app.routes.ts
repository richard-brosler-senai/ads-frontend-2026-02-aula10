import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Games } from './pages/games/games';
import { GamesDetalhes } from './pages/games-detalhes/games-detalhes';
import { NotFound } from './pages/not-found/not-found';
import { Eventos } from './pages/eventos/eventos';

export const routes: Routes = [
    { path:"",component: Home },
    { path:"jogos/:id",component: GamesDetalhes},
    { path:"jogos",component: Games},
    { path:"eventos",component: Eventos},
    { path:"**", component: NotFound}

];
