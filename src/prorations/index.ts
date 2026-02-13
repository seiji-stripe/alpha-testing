import type {
  ProrateItemsFunction,
  Prorations,
  ProrateItemsRequest,
  ProrateItemsResponse,
} from "@stripe/scripts/prorations";

/**
 * Configuration for the prorations script.
 * Customize this to pass data from your Stripe dashboard.
 */
export interface ProrationsConfig {
  // Add your configuration fields here
}

const prorateItems: ProrateItemsFunction<ProrationsConfig> = (
  _context,
  _configuration,
  prorate_items_request: ProrateItemsRequest,
): ProrateItemsResponse => {
  // TODO: Implement your proration logic.
  // Return one entry per item with proration_factor and line_item_period.
  return {
    items: prorate_items_request.items.map((item) => ({
      key: item.key,
      proration_factor: item.current_proration_factor,
      line_item_period: item.service_period,
    })),
  };
};

export const prorations: Prorations<ProrationsConfig> = {
  prorateItems,
};
