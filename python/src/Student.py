class Student():
    def __init__(self, tuple):
        self.__id = tuple[0]
        self.__nome = tuple[1]

    def getId(self):
        return self.__id

    def getNome(self):
        return self.__nome