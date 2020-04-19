export const environment = {
  production: false
};

export function API(): string {
  return localStorage.getItem('server') || "https://agdo-server.appspot.com";
}

export const ApplicationId = 'conexao-solidaria';
