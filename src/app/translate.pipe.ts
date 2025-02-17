import { Pipe, PipeTransform } from '@angular/core';

export type Languages = 'en' | 'pt'
export type Messages = 'placeholder' | 'title'

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: Messages, languages: Languages): string {
    return this.translations[languages][value];
  }

  translations = {
    'en': {
      'placeholder': 'Type here your new tasks...',
      'title': 'To-Do List'
    },
    'pt': {
      'placeholder': 'Digite aqui suas novas tarefas...',
      'title': 'Lista de A Fazeres'
    }
  }

}
