import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards-crud',
  templateUrl: './rewards-crud.component.html',
  styleUrls: ['./rewards-crud.component.css']
})
export class RewardsCrudComponent {

  isFormActive:boolean=false;

  constructor(){}

  selectedReward: Reward = {
    id: 0,
    reward_name: "",
    code: "",
    status: false
  };

  rewards: Reward[] = [
    {
      id: 1,
      reward_name:"Play a game worth 20 credits",
      code: "CREDIT20",
      status: true
    },
    {
      id: 2,
      reward_name: "Food & Bevarage comp",
      code: "F&B",
      status: true
    },
    {
      id: 3,
      reward_name: "Exempted from paying minimum deposit for 2 months",
      code: "SKIPDEPO",
      status: true
    },
    {
      id: 4,
      reward_name: "Lost",
      code: "LOST",
      status: true
    }
  ];



  isCreateMode: boolean = true;
  isEditMode: boolean = false;

  addRewardForm():void{
    this.isFormActive=true;
  }

  addReward(): void {
    this.selectedReward = {
      id: 0,
      reward_name: "",
      code:"",
      status: false
    };
    this.isCreateMode = true;
    this.isEditMode = false;
  }

  editReward(reward: Reward): void {
    this.selectedReward = { ...reward };
    this.isCreateMode = false;
    this.isEditMode = true;
    this.isFormActive=true;

  }

  saveReward(): void {
    if (this.isCreateMode) {
      // Create new Reward
      this.selectedReward.id = this.rewards.length + 1;
      this.rewards.push(this.selectedReward);
    } else if (this.isEditMode) {
      // Update existing Reward
      const index = this.rewards.findIndex(n => n.id === this.selectedReward.id);
      if (index !== -1) {
        this.rewards[index] = { ...this.selectedReward };
      }
    }

    this.cancelReward();
  }



  deleteReward(Reward: Reward): void {
    const index = this.rewards.findIndex(n => n.id === Reward.id);
    if (index !== -1) {
      this.rewards.splice(index, 1);
    }
  }

  cancelReward(): void {
    this.selectedReward = {
      id: 0,
      reward_name: "",
      code: "",
      status: false
    };
    this.isFormActive=false;
    this.isCreateMode = true;
    this.isEditMode = false;
  }

  changeRewardStatus(reward:Reward):void{
    console.log("toggled")
    console.log(reward.reward_name);
  }
}

interface Reward {
  id: number;
  reward_name:string;
  code: string;
  status: boolean;
}
