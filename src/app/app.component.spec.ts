import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('El valor de la variable myVar ser igual a',()=>{
    const appComponent = new AppComponent();
    const myVar = appComponent.myVar;
    expect(myVar).toEqual('Hola mundo');
  });
  it('El valor de la variable myVar ser igual a',()=>{
    const appComponent = new AppComponent();
    const value = appComponent.saludo;
    expect(value).toContain('Omar');
  });
});
