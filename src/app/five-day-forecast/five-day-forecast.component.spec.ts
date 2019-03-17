import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FiveDayForecastComponent } from './five-day-forecast.component';

describe('FiveDayForecastComponent', () => {
  let component: FiveDayForecastComponent;
  let fixture: ComponentFixture<FiveDayForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ FiveDayForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach((): any => {
    fixture = TestBed.createComponent(FiveDayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): any => {
    expect(component).toBeTruthy();
  });
});
