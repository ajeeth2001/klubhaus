import { Component } from '@angular/core';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spinwheel.component.html',
  styleUrls: ['./spinwheel.component.scss']
})
export class SpinWheelComponent {
  public isAnimating: boolean = false;
  public rotation: number = 0;
  public spinParts: number[] = [1, 2, 3, 4];

  private shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  public spin(): void {
    if (this.isAnimating) return;

    const box = document.getElementById('box');
    const results = this.shuffle(this.spinParts);

    const selectedItem = `Prize ${results[0]}`;
    if(box){
      box.style.setProperty('transition', 'all ease 4s');
    box.style.transform = `rotate(${results[0]}deg)`;
    }


    this.isAnimating = true;

    setTimeout(() => {
      this.isAnimating = false;
      this.rotation = results[0];
    }, 4000);

    setTimeout(() => {
      // Display alert with selectedItem
      alert(selectedItem);
    });

    setTimeout(() => {
      if(box){
        box.style.setProperty('transition', 'all ease 1s');
      box.style.transform = 'rotate(90deg)';
      }
    }, 5000);
  }
}
