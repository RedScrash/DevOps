import { TestBed, getTestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { User } from '../models/user';

describe('UsersService', () => {
   //
  let injector: TestBed;
  // Simular solicitudes
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    // Tener acceso a las variables limpias antes de cada 'it'
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    }
  );

  afterEach(()=>{
    // Verificamos que no hayan solicitudes pendientes
    httpMock.verify();
  });

  it('Debe ser creada la instancia del servicio UsersService', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('Debe retornar un observable con el array de usuarios',()=>{
    // Hace el instanciamiento de la clase, cumple la misma fucnión que el new UsersService()
    const usersService:UsersService = TestBed.get(UsersService);
    // const usersService = new UsersService();
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

    usersService.getAll().subscribe((users)=>{
      // Validamos que la longitud del array se iguala 2
      expect(users.length).toEqual(2);
      // Validamos que la respuesta del servicio sea igual a la  variable mockUser
      expect(users).toEqual(mockUser);
      // Validamos que la etiqueta 'login' esté definida en los parametros devueltos
      expect(users[0].login).toBeDefined();
    });
    // Validamos que la url consumida por el servicio sea 'https://api.github.com/users'
    const req = httpMock.expectOne('https://api.github.com/users');
    // Validamos que el método consumido sea el GET
    expect(req.request.method).toBe('GET');
    // proporciona valores ficticios como respuesta de nuestras peticiones
    req.flush(mockUser);
  });
});
