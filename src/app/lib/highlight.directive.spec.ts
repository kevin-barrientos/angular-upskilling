import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: ` <div [tpgHighlight]="highlight"></div>`,
})
class TestHighlightComponent {
  highlight: boolean = false;
}

describe('HighlightDirective', () => {
  let component: TestHighlightComponent;
  let fixture: ComponentFixture<TestHighlightComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHighlightComponent],
      imports: [HighlightDirective],
    });

    fixture = TestBed.createComponent(TestHighlightComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement.query(By.css('div'));
  });

  it('should highlight the background color to yellow when set to true', () => {
    component.highlight = true;
    fixture.detectChanges();
    const bgColor = divEl.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  it('should remove the background color when set to false', () => {
    component.highlight = false;
    fixture.detectChanges();
    const bgColor = divEl.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('');
  });
});
