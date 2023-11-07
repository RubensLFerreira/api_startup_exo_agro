
# Exo Agro

Exo Agro emerged as a startup in the Ceará State government's Digital Corridors program. Exo Agro is an application that aims to assist agronomists in technical visits to rural producers.


### Description of routes

#### Route client

| Methods   | Route       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `POST` | `/cliente/cadastrar` | Create new customer |
| `GET` | `/cliente/:id` | Get customer by ID |
| `GET` | `/clientes` | Catch all customers |
| `PUT` | `/cliente/editar/:id` | Edit customer by ID |
| `DELETE` | `/cliente/deletar/:id` | Delete customer by ID |

#### Route agronomo
| Methods   | Route       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `POST` | `/agronomo/cadastrar` | Create new agronomist |
| `GET` | `/agronomo/:id` | Get agronomist by ID |
| `PUT` | `/agronomo/editar/:id` | Edit agronomist by ID |
| `DELETE` | `/agronomo/deletar/:id` | Delete agronomist by ID |

#### Route visita
| Methods   | Route       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `POST` | `/visita/agendar` | Create schedule  |
| `GET` | `/visita/:id` | Get agronomist by ID |
| `PUT` | `/visita/editar/:id` | Edit agronomist by ID |
| `GET` | `/visita/relatorio/:id` |Get report by ID |
| `GET` | `/visita/relatorios` | Get all reports |

#### Route login
| Methods   | Route       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `POST` | `/login` | Generate token key |

#### Route usuario
| Methods   | Route       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/check-usuario` | Check if user is authenticated |
| `GET` | `/usuario/:id` | Generate token key |

### Configuration and installation

Clone the repository

```bash
git clone https://github.com/RubensLFerreira/api_startup_exo_agro.git
```

Install all necessary dependencies from both directories
```bash
npm install
```

Run the command below to run the application
```bash
npm run dev
```

Access the address
```bash
http://localhost:8080/
```

