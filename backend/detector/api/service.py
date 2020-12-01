from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

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

class ListCreateViewSet(ListModelMixin,
                        CreateModelMixin,
                        GenericViewSet
                    ):
    '''
    Переопределение определения сериализатора и прав доступа
    Создание и список
    Базовые функции вью-сета
    '''
    pass

class PaginationData(PageNumberPagination):
    page_size = 20
    max_page_size = 1000

    def get_paginated_response(self, data):
        return Response(data)
