import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { Observable, of } from 'rxjs';
import { User } from './models/user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let appComponent;
  let usersService;
  // Se ejecuta una sola vez antes de ejecutar cualquier prueba
  beforeAll(() => {
    console.log('Se ejecuta una sola vez antes de ejecutar cualquier prueba');
  });
  // Se ejecuta antes de cada caso de prueba
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [UsersService]
    }).compileComponents();
    appComponent = new AppComponent();
    console.log('Se ejecuta antes de cada prueba "it"');
    usersService = TestBed.get(UsersService);
  }));

  it('Debe crearse la instancia del componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('El valor de la variable myVar ser igual a', () => {
    const myVar = appComponent.myVar;
    expect(myVar).toEqual('Hola mundo');
  });
  it('El valor de la variable myVar ser igual a', () => {
    const value = appComponent.saludo;
    expect(value).toContain('Omar');
  });
  it('Debe rotornar TRUE', () => {
    const myBool = appComponent.esPar(44);
    expect(myBool).toBeTruthy();
  });
  it('Debe rotornar FLASE', () => {
    const myBool = appComponent.esPar(23);
    expect(myBool).toBeFalsy();
  });
  // Se ejecuta después de cada prueba
  afterEach(() => {
    console.log('Se ejecuta después de cada prueba "it"');
  });
  it ('Debe llamar al servicio UsersService y el método getAll()', () => {
    let mockUser: User[] = [
      {
        login:	"mojombo",
        id:	1,
        node_id:	"MDQ6VXNlcjE=",
        avatar_url:	"https://avatars0.githubusercontent.com/u/1?v=4",
        gravatar_id:	"",
        url:	"https://api.github.com/users/mojombo",
        html_url:	"https://github.com/mojombo",
        followers_url:	"https://api.github.com/users/mojombo/followers",
        following_url:	"https://api.github.com/u…o/following{/other_user}",
        gists_url:	"https://api.github.com/u…/mojombo/gists{/gist_id}",
        starred_url	:"https://api.github.com/u…o/starred{/owner}{/repo}",
        subscriptions_url:	"https://api.github.com/users/mojombo/subscriptions",
        organizations_url:	"https://api.github.com/users/mojombo/orgs",
        repos_url:	"https://api.github.com/users/mojombo/repos",
        events_url:	"https://api.github.com/u…mojombo/events{/privacy}",
        received_events_url:	"https://api.github.com/u…/mojombo/received_events",
        type:	"User",
        site_admin:	false
      },
      {
        login:	"defunkt",
        id:	2,
        node_id	:"MDQ6VXNlcjI=",
        avatar_url:	"https://avatars0.githubusercontent.com/u/2?v=4",
        gravatar_id:	"",
        url:	"https://api.github.com/users/defunkt",
        html_url:	"https://github.com/defunkt",
        followers_url:	"https://api.github.com/users/defunkt/followers",
        following_url:	"https://api.github.com/users/defunkt/following{/other_user}",
        gists_url:	"https://api.github.com/users/defunkt/gists{/gist_id}",
        starred_url:	"https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        subscriptions_url:	"https://api.github.com/users/defunkt/subscriptions",
        organizations_url:	"https://api.github.com/users/defunkt/orgs",
        repos_url:	"https://api.github.com/users/defunkt/repos",
        events_url:	"https://api.github.com/users/defunkt/events{/privacy}",
        received_events_url:	"https://api.github.com/users/defunkt/received_events",
        type:	"User",
        site_admin:	false
      }
    ];
    const spyUsers = spyOn(usersService, 'getAll').and.callFake((users) =>{
      return of(mockUser);
    });
    appComponent.ngOnInit();
    expect(spyUsers).toHaveBeenCalled();
  });
  // Se ejecuta al finalizar las pruebas
  afterAll(() => {
    console.log('Se ejecuta al finalizar las pruebas');
  });
});
