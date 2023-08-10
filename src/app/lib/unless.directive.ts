import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[tpgUnless]',
})
export class UnlessDirective {
  private hasView = false;
  private condition = false;
  private _elseTemplateRef?: TemplateRef<unknown>;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set tpgUnless(condition: boolean) {
    this.condition = condition;
    if (!this.condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;

      if (this._elseTemplateRef) {
        this.viewContainer.createEmbeddedView(this._elseTemplateRef);
      }
    }
  }

  @Input() set tpgUnlessElse(templateRef: TemplateRef<any>) {
    this._elseTemplateRef = templateRef;
  }
}
