import {
  AfterViewInit,
  ElementRef,
  Directive,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appReadmore]',
})
export class ReadmoreDirective implements AfterViewInit {
  @Input('textlimit') textlimit = 100;
  readMoreState = false;
  text = '';
  subText = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.text = this.el.nativeElement.innerHTML;

    this.setupReadmore();
  }

  setupReadmore() {
    if (this.text.length > this.textlimit) {
      this.readMoreState = true;
      this.subText = this.text.substr(0, this.textlimit) + '...';
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        this.subText
      );

      this.renderer.listen(this.el.nativeElement, 'click', () => {
        if (this.readMoreState) {
          this.renderer.setProperty(
            this.el.nativeElement,
            'innerHTML',
            this.text
          );
          this.readMoreState = false;
        } else {
          this.renderer.setProperty(
            this.el.nativeElement,
            'innerHTML',
            this.subText
          );
          this.readMoreState = true;
        }
      });
    }
  }
}
