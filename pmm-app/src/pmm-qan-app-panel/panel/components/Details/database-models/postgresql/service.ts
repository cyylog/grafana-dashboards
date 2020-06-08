import { apiRequestManagement } from 'shared/components/helpers/api';

export default class PostgresqlDatabaseService {
  static getPostgreSQLIndex(body) {
    return apiRequestManagement.post<any, any>('/Actions/StartPostgreSQLShowIndex', body);
  }

  static getShowCreateTablePostgreSQL(body) {
    return apiRequestManagement.post<any, any>('/Actions/StartPostgreSQLShowCreateTable', body);
  }
}
