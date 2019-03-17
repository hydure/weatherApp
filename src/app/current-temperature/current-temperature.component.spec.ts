import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CurrentTemperatureComponent } from './current-temperature.component';

describe('CurrentTemperatureComponent', () => {
  let component: CurrentTemperatureComponent;
  let fixture: ComponentFixture<CurrentTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CurrentTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach((): any => {
    fixture = TestBed.createComponent(CurrentTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): any => {
    expect(component).toBeTruthy();
  });
});
