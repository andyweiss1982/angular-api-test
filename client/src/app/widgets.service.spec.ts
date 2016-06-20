import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WidgetsService } from './widgets.service';

describe('Widgets Service', () => {
  beforeEachProviders(() => [WidgetsService]);

  it('should ...',
      inject([WidgetsService], (service: WidgetsService) => {
    expect(service).toBeTruthy();
  }));
});
