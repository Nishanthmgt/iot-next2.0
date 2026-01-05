import { BOARDS } from '../data/boards';
import { sensors } from '../data/sensors';

/**
 * Basic AI-Logic substitute for prototype.
 * Suggests pin mappings for a given board and list of sensors.
 */
export const suggestConfiguration = (boardId, selectedSensors) => {
    const board = BOARDS[boardId];
    if (!board) return null;

    const availablePins = [...board.pins];
    const pinMapping = [];

    selectedSensors.forEach(sensorId => {
        const sensorData = sensors.find(s => s.id === sensorId);
        if (!sensorData) return;

        // Logic to pick pins based on sensor type (placeholder for LLM)
        // e.g., DHT11 needs 1 Data Pin. PIR needs 1 Digital Pin.
        const mapping = {};

        // Simplified mapping logic
        if (sensorData.name.includes("DHT11")) {
            const dataPin = availablePins.find(p => p.type === 'io' && !p.isLocked);
            if (dataPin) {
                mapping["DATA"] = dataPin.id;
                dataPin.isLocked = true;
            }
        }

        pinMapping.push({
            sensorId,
            name: sensorData.name,
            mapping
        });
    });

    return {
        boardId,
        sensors: pinMapping,
        widgets: selectedSensors.map(s => ({
            type: 'display',
            label: sensors.find(item => item.id === s)?.name || 'Value',
            dataSource: s
        }))
    };
};
