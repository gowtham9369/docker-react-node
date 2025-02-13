export interface Vehicle {
    id: string;
    provider: "FREENOW" | "SHARENOW";
    type: "FREE NOW" | "SHARE NOW";
    coordinate: {
      latitude: number;
      longitude: number;
    };
    licencePlate: string;
    address?: string;
    fuel?: number;
    state: "ACTIVE" | "INACTIVE";
    condition: "BAD" | "GOOD";
  }
  
export interface VehicleStatusProps {
    state: Vehicle["state"];
}

export interface VehicleFuelLevelProps {
    fuel: Vehicle["fuel"] | undefined;
}

export interface VehicleConditionProps {
    condition: Vehicle["condition"];
}

export interface Props {
    vehicles: Vehicle[];
    onSelect: (vehicle: Vehicle) => void;
    selected: Vehicle | null;
}

