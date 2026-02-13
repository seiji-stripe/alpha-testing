import type {
  RouteItemsFunction,
  BillRouting,
  RouteItemsRequest,
  RouteItemsResponse,
} from "@stripe/scripts/bill_routing";

/**
 * Configuration for the bill routing script.
 * Customize this to pass data from your Stripe dashboard.
 */
export interface BillRoutingConfig {
  // Add your configuration fields here
}

const routeItems: RouteItemsFunction<BillRoutingConfig> = (
  _context,
  _configuration,
  route_items_request: RouteItemsRequest,
): RouteItemsResponse => {
  // TODO: Implement your routing logic.
  // Return one entry per item with routing_decision (e.g. PRIMARY_BILL, DO_NOT_BILL).
  return {
    items: route_items_request.items.map((item) => ({
      key: item.key,
      routing_decision: {
        type: "PRIMARY_BILL",
        secondary_bill: null,
      },
    })),
  };
};

export const billRouting: BillRouting<BillRoutingConfig> = {
  routeItems,
};
