import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Jogos } from './pages/jogos/jogos';
import { Series } from './pages/series/series';
import { Animes } from './pages/animes/animes';
import { Filmes } from './pages/filmes/filmes';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home }, 
    { path: 'jogos', component: Jogos }, 
    { path: 'series', component: Series}, 
    { path: 'animes',  component: Animes}, 
    { path: 'filmes',  component: Filmes}, 
    { path: '**', component: NotFound }
];
