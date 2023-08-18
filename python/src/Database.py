import psycopg2

class Database():
    def __init__(self) -> None:
        self.__connection = psycopg2.connect(
            host = 'localhost',
            port = '5432',
            dbname = 'teste',
            user = 'postgres',
            password = 'postgres'
        )
        self.__cursor = self.__connection.cursor()
        self.checkDatabase()

    def checkDatabase(self):
        self.__cursor.execute('''
            CREATE TABLE IF NOT EXISTS students (
                id SERIAL PRIMARY KEY,
                nome CHARACTER VARYING(50)
            );
        ''')
        self.__connection.commit()
    
    def execute(self, sql):
        self.__cursor.execute(sql)
        self.__connection.commit()
        try:
            return self.__cursor.fetchall()
        except:
            return None