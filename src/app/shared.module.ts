import {NgModule} from '@angular/core';
import {AvatarModule} from 'ngx-avatar';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    AvatarModule,
    FormsModule,
  ],
  declarations: [],
  exports: [
    AvatarModule,
    FormsModule,
  ],
})
export class SharedModule {
}
