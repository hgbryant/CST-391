import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbums } from './list-albums';

describe('ListAlbums', () => {
  let component: ListAlbums;
  let fixture: ComponentFixture<ListAlbums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAlbums],
    }).compileComponents();

    fixture = TestBed.createComponent(ListAlbums);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
