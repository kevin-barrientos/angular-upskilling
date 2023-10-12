import { Component, DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UnlessDirective } from './unless.directive';

@Component({
  template: `
    <ng-template #elseBlock>
      <div>Else Content</div>
    </ng-template>
    <div class="main" *tpgUnless="showContent; else elseBlock">Main Content</div>
  `,
})
class TestComponent {
  showContent = false;
}

describe('UnlessDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let unlessDirNode: DebugNode[]; // the element w/ the directive
  let renderedDiv: HTMLElement; // render

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [UnlessDirective],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all nodes with an attached UnlessDirective
    unlessDirNode = fixture.debugElement.queryAllNodes(By.directive(UnlessDirective));

    // main div
    renderedDiv = fixture.debugElement.query(By.css('.main')).nativeElement;
  });

  it('should have one element with the directive', () => {
    expect(unlessDirNode.length).toBe(1);
  });

  it('should display the "Main Content" when "showContent" is false', () => {
    expect(renderedDiv.innerText).toContain('Main Content');
  });

  it('should display the "Else Content" when "showContent" is true', async () => {
    fixture.componentInstance.showContent = true;

    fixture.detectChanges();
    await fixture.whenStable();

    renderedDiv = fixture.debugElement.query(By.css(':not(.main)')).nativeElement;
    expect(renderedDiv.innerText).toContain('Else Content');
  });
});
