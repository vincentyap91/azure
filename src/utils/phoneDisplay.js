/**
 * Build instructional copy: "Enter the code we sent to ******8889."
 * @param {string} phoneRaw - digits and separators from the phone field
 */
export function tacSentInstructionLine(phoneRaw) {
    const d = String(phoneRaw ?? '').replace(/\D/g, '');
    const tail = d.length >= 4 ? d.slice(-4) : d.padStart(4, '0');
    return `Enter the code we sent to ******${tail}.`;
}
