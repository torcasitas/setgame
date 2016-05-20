import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SetgameAppComponent } from '../app/setgame.component';

beforeEachProviders(() => [SetgameAppComponent]);

describe('App: Setgame', () => {
  it('should create the app',
      inject([SetgameAppComponent], (app: SetgameAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'setgame works!\'',
      inject([SetgameAppComponent], (app: SetgameAppComponent) => {
    expect(app.title).toEqual('setgame works!');
  }));
});
