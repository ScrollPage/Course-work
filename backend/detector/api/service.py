from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, CreateModelMixin

class PermissionMixin:
    '''Mixin permission для action'''
    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]] 
        except KeyError:
            return [permission() for permission in self.permission_classes]

class SerializerMixin:
    '''Класс сериализатора в зависимости от action'''
    def get_serializer_class(self):
        try:
            return self.serializer_class_by_action[self.action]
        except KeyError:
            return self.serializer_class

class PermissionSerializerListCreateViewSet(SerializerMixin,
                                            ListModelMixin,
                                            CreateModelMixin,
                                            GenericViewSet
                                        ):
    '''
    Переопределение определения сериализатора и прав доступа
    Создание и список
    Базовые функции вью-сета
    '''
    pass