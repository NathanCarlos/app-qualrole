export interface User {
    id: number;
    ID_EMPRESA: number,
    ID_EVENTO_CLIENTE: number,
    NICKNAME_CLIENTE: string,
    SENHA_CLIENTE: string,
    NOME_CLIENTE: string,
    SOBRENOME_CLIENTE: string,
    EMAIL_CLIENTE: string,
    CIDADE_CLIENTE: string,
    DT_NASCIMENTO_CLIENTE: Date,
    createdAt: Date,
    updatedAt: Date
}
