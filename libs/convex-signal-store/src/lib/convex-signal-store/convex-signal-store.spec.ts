import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvexSignalStore } from './convex-signal-store';

describe('ConvexSignalStore', () => {
  let component: ConvexSignalStore;
  let fixture: ComponentFixture<ConvexSignalStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvexSignalStore],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvexSignalStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
