import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesDetalhes } from './games-detalhes';

describe('GamesDetalhes', () => {
  let component: GamesDetalhes;
  let fixture: ComponentFixture<GamesDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
